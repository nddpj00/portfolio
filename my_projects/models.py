from django.db import models
from cloudinary.models import CloudinaryField

class Technology(models.Model):
    LANGUAGE = 'language'
    FRAMEWORK = 'framework'
    CATEGORY_CHOICES = [
        (LANGUAGE, 'Language'),
        (FRAMEWORK, 'Framework'),
    ]

    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = CloudinaryField('image')
    live_url = models.URLField(blank=True, null=True)
    git_url = models.URLField(blank=True, null=True)
    date_created = models.DateField()

    # Many-to-Many relationships
    languages_used = models.ManyToManyField(
    Technology, 
    related_name='projects_languages', 
    limit_choices_to={'category': Technology.LANGUAGE},
    blank=True  # <-- allows empty selection in admin
    )

    frameworks_used = models.ManyToManyField(
        Technology, 
        related_name='projects_frameworks', 
        limit_choices_to={'category': Technology.FRAMEWORK},
        blank=True  # <-- this is critical
    )

    def __str__(self):
        return self.title
