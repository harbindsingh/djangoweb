from django.db import models
from django.contrib.auth.models import User
from django.db.models import query
from django.db.models.expressions import F


# Create your models here.
class MiniCourse(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=1000)
    fee = models.FloatField()
    thumbnail = models.FileField(upload_to='course_thumbnail/')
    syllabus = models.FileField(upload_to='course_syllabus/')
    course_preview_video = models.FileField(upload_to='course_preview_videos/', null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    live_one_to_one = models.BooleanField(default=False)
    self_paced = models.BooleanField(default=False)
    offline = models.BooleanField(default=False)
    next_batch_starting_date = models.DateField(null=True)
    high_price = models.FloatField(default=0)
    class_link = models.CharField(max_length=1000, null=True, blank=True)
    
    class Meta:
        ordering = ['-date_added']   

    def __str__(self):
        return self.title

    @property
    def avgRating(self):
        ratings = self.minicourserating_set.all()
        avg=0.0
        i=0
        for rating in ratings:
            i+=1
            avg += rating.points_given
        if(i>0):
            avg = avg//i
        return avg

    @property
    def all_topics(self):
        topics = self.topic_set.all()
        return topics

    @property
    def get_duration(self):
        topics = self.topic_set.all()
        duration = 0
        for topic in topics:
            duration += topic.duration_in_hours
        return duration
    
    

class Topic(models.Model):
    mini_course = models.ForeignKey(MiniCourse, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    duration_in_hours = models.IntegerField()
    class_link = models.CharField(max_length=1000, null=True, blank=True)
    lecture_video = models.FileField(upload_to='courseTutorials/', null=True, blank=True)

    def __str__(self):
        return str(self.mini_course) + "_" + self.title

class FullCourse(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=800,default='null')
    fee = models.FloatField() 
    thumbnail = models.FileField(upload_to='courseThumbnail/')    
    live_one_to_one = models.BooleanField(default=False)
    self_paced = models.BooleanField(default=False)
    offline = models.BooleanField(default=False)
    next_batch_starting_date = models.DateField()
    course_preview_video = models.FileField(upload_to='course_preview_videos/', null=True)
    high_price = models.FloatField(default=0)

    def __str__(self):
        return self.title

    @property
    def all_topics(self):
        mini_courses = self.minicoursesinfullcourse_set.all()
        return mini_courses

    @property
    def get_duration(self):
        mini_courses = self.minicoursesinfullcourse_set.all()
        fullduration = sum(miniCourse.mini_course.get_duration for miniCourse in mini_courses)
        return fullduration

    @property
    def avgRating(self):
        ratings = self.fullcourserating_set.all()
        avg=0.0
        i=0
        for rating in ratings:
            i+=1
            avg += rating.points_given
        if(i>0):
            avg = avg//i
        return avg

    
    
class MiniCoursesInFullCourse(models.Model):
    full_course = models.ForeignKey(FullCourse, on_delete=models.CASCADE)
    mini_course = models.ForeignKey(MiniCourse, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.full_course) +"_"+ str(self.mini_course)


class UserMiniCourse(models.Model):
    mini_course = models.ForeignKey(MiniCourse, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    mode = models.CharField(max_length=100, null=True)
    paid = models.BooleanField(default=False)
    phone_no = models.BigIntegerField(default=0)
    certificate = models.FileField(upload_to='userCertificates/miniCourses/', null=True, blank=True)

    def __str__(self):
        return str(self.user) + '_' + str(self.mini_course) + '_' + self.mode

class UserFullCourse(models.Model):
    full_course = models.ForeignKey(FullCourse, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    mode = models.CharField(max_length=100, null=True)
    phone_no = models.BigIntegerField(default=0)
    paid = models.BooleanField(default=False)
    certificate = models.FileField(upload_to='userCertificates/fullCourses/', null=True, blank=True)

    def __str__(self):
        return str(self.user) + '_' + str(self.full_course) + '_' + self.mode

    def save(self, *args, **kwargs):
        if(self.paid == True):
            mini_in_full = MiniCoursesInFullCourse.objects.filter(full_course=self.full_course)
            for mini in mini_in_full:
                userminiCourses = UserMiniCourse.objects.filter(mini_course=mini.mini_course)
                print(userminiCourses)
                for course in userminiCourses:
                    course.paid = True
                    course.save()
        else:
            mini_in_full = MiniCoursesInFullCourse.objects.filter(full_course=self.full_course)
            for mini in mini_in_full:
                userminiCourses = UserMiniCourse.objects.filter(mini_course=mini.mini_course)
                for course in userminiCourses:
                    course.paid = False 
                    course.save()           
        super(UserFullCourse, self).save(*args, **kwargs)

class MiniCourseRating(models.Model):
    POINTS = [
        (5,5),(4,4),(3,3),(2,2),(1,1)
    ]
    points_given = models.IntegerField(default=0, choices=POINTS)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mini_course = models.ForeignKey(MiniCourse, on_delete=models.CASCADE)  
    review = models.TextField(null=True, blank=True)  

    def __str__(self):
        return str(self.user)


class FullCourseRating(models.Model):
    POINTS = [
        (5,5),(4,4),(3,3),(2,2),(1,1)
    ]
    points_given = models.IntegerField(default=0, choices=POINTS)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    full_course = models.ForeignKey(FullCourse, on_delete=models.CASCADE)
    review = models.TextField(null=True, blank=True)    

    def __str__(self):
        return str(self.user)

class SyllabusDownloadData(models.Model):
    mini_course = models.ForeignKey(MiniCourse, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150, null=True)
    phone_no = models.CharField(max_length=11)
    email = models.EmailField()

    def __str__(self):
        return self.first_name

class freeDemoRegistration(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150, null=True)
    phone_no = models.CharField(max_length=11)
    email = models.EmailField()
    date_added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name

class TrainerData(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150, null=True)
    phone_no = models.CharField(max_length=11)
    email = models.EmailField()
    specialized_in = models.CharField(max_length=800)

    def __str__(self):
        return self.first_name    

class moreAboutPdf(models.Model):
    title = models.CharField(max_length=50)
    pdf = models.FileField(upload_to="know_more_pdf/")
    date_added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title + "_pdf"

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    person_by = models.CharField(max_length=250, null=True, blank=True)
    date = models.DateTimeField()
    link = models.CharField(max_length=800)
    registrationForm_link = models.CharField(max_length=800)
    thumbnail =  models.ImageField(upload_to="event_thumbnails/", null=True, blank=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return "Event" + self.title

class UserQuery(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=300)
    query_description = models.TextField()
    resolved = models.BooleanField(default=False, null=True, blank=True)
    date_added = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_added']

    def __str__(self):
        return self.title

