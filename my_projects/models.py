from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.postgres.fields import ArrayField


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length= 1000)
    image = CloudinaryField('image')  
    live_url = models.URLField(blank=True)
    git_url = models.URLField(blank=True)
    date_created = models.DateField()
    language_used = ArrayField(models.CharField(max_length=20))
    framework_used = ArrayField(models.CharField(max_length=20))

    def __str__(self):
        return self.title
