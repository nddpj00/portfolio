from django.contrib import admin
from django.utils.html import format_html
from .models import Project, Technology

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('image_preview', 'title', 'date_created', 'live_url', 'git_url')
    search_fields = ('title', 'description')
    ordering = ('-date_created',)
    filter_horizontal = ('languages_used', 'frameworks_used')

    # Image preview in admin
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height: 60px; border-radius: 6px; object-fit: cover;" />',
                obj.image.url
            )
        return "-"
    image_preview.short_description = 'Image'

    # Fieldsets
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
        color = '#27ae60' if obj.category == 'language' else '#3498db'
        return format_html('<span style="color: {}; font-weight:600;">{}</span>', color, obj.get_category_display())
    category_coloured.short_description = 'Category'
