# my_projects/api/views.py
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from my_projects.models import Project
from .serializers import ProjectSerializer
from django.db.models import Prefetch
from my_projects.models import Technology

class ProjectViewSet(viewsets.ModelViewSet):
    # Prefetch languages and frameworks to avoid N+1 queries
    queryset = Project.objects.all().prefetch_related(
        Prefetch('languages_used', queryset=Technology.objects.all()),
        Prefetch('frameworks_used', queryset=Technology.objects.all())
    )
    serializer_class = ProjectSerializer
    parser_classes = (MultiPartParser, FormParser)
