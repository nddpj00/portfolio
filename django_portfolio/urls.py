
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from my_projects.api.views import ProjectViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
