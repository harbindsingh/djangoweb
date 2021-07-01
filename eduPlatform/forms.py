from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from django import forms
from django.contrib.auth.models import User
from . models import *
class UserForm(UserCreationForm):
    username = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=150, required=True)
    last_name = forms.CharField(max_length=150, required=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password1', 'password2']

class UserMiniCourseRegistrationForm(ModelForm):
    phone_no = forms.RegexField(regex='^([6-9]{1})\d{9}', max_length=10)
    class Meta:
        model = UserMiniCourse
        fields = ['phone_no']

class UserFullCourseRegistrationForm(ModelForm):
    phone_no = forms.RegexField(regex='^([6-9]{1})\d{9}')
    class Meta:
        model = UserFullCourse
        fields = ['phone_no']

class SyllabusDownloadForm(ModelForm):
    phone_no = forms.RegexField(regex='^([6-9]{1})\d{9}')
    class Meta:
        model = SyllabusDownloadData
        fields = "__all__"

class TrainerDataForm(ModelForm):
    phone_no = forms.RegexField(regex='^([6-9]{1})\d{9}')
    class Meta:
        model = TrainerData
        fields = "__all__"

class freeDemoForm(ModelForm):
    phone_no = forms.RegexField(regex='^([6-9]{1})\d{9}')
    class Meta:
        model = freeDemoRegistration
        fields = "__all__"

class userQueryForm(ModelForm):
    class Meta:
        model = UserQuery
        fields = ['title', 'query_description']