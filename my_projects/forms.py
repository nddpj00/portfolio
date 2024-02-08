
from django import forms
from cloudinary.forms import CloudinaryFileField
from .models import Project

class CloudinaryImageField(forms.ImageField):
    def widget_attrs(self, widget):
        attrs = super().widget_attrs(widget)
        attrs['class'] = 'cloudinary-fileupload'
        return attrs

class ProjectForm(forms.ModelForm):
    image = CloudinaryImageField(label='Image')

    class Meta:
        model = Project
        fields = ['image']