from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(MiniCourse)
admin.site.register(Topic)
admin.site.register(FullCourse)
admin.site.register(MiniCoursesInFullCourse)
admin.site.register(UserMiniCourse)
admin.site.register(UserFullCourse)
admin.site.register(SyllabusDownloadData)
admin.site.register(TrainerData)
admin.site.register(moreAboutPdf)
admin.site.register(MiniCourseRating)
admin.site.register(Event)
admin.site.register(UserQuery)


class FreeDemoAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone_no', 'email', 'date_added')

admin.site.register(freeDemoRegistration, FreeDemoAdmin)

