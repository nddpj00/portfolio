from django.contrib import admin
from django.utils.html import format_html
from .models import Project, Technology

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created', 'live_url', 'git_url')
    search_fields = ('title', 'description')
    ordering = ('-date_created',)
    filter_horizontal = ('languages_used', 'frameworks_used')
    
    # Add these fields to the form explicitly
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'image', 'date_created')
        }),
        ('URLs', {
            'fields': ('live_url', 'git_url'),
            'classes': ('collapse',)
        }),
        ('Technologies', {
            'fields': ('languages_used', 'frameworks_used')
        }),
    )

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'category_coloured')
    search_fields = ('name',)
    list_filter = ('category',)

    def category_coloured(self, obj):
        color = 'green' if obj.category == 'language' else 'blue'
        return format_html('<span style="color: {};">{}</span>', color, obj.get_category_display())
    category_coloured.short_description = 'Category'