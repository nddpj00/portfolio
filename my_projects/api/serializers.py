# my_projects/api/serializers.py
from rest_framework import serializers
from my_projects.models import Project, Technology

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'category']

class ProjectSerializer(serializers.ModelSerializer):
    languages_used = TechnologySerializer(many=True, read_only=True)
    frameworks_used = TechnologySerializer(many=True, read_only=True)
    image = serializers.ImageField(use_url=True)  # ensures full URL

    class Meta:
        model = Project
        fields = [
            'id',
            'title',
            'description',
            'image',
            'live_url',
            'git_url',
            'date_created',
            'languages_used',
            'frameworks_used',
        ]
