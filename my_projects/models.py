from django.db import models
from cloudinary.models import CloudinaryField

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = CloudinaryField('image')
    live_url = models.URLField(blank=True)
    git_url = models.URLField(blank=True)
    date_created = models.DateField()

    # ManyToMany relationships
    languages_used = models.ManyToManyField('Technology', related_name='projects_languages', limit_choices_to={'category': 'language'})
    frameworks_used = models.ManyToManyField('Technology', related_name='projects_frameworks', limit_choices_to={'category': 'framework'})

    def __str__(self):
        return self.title


class Technology(models.Model):
    CATEGORY_CHOICES = [
        ('language', 'Language'),
        ('framework', 'Framework'),
    ]
    
    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name