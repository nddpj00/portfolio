from pathlib import Path
import os
import environ
import cloudinary
import cloudinary.uploader
import cloudinary.api
import dj_database_url

env = environ.Env()
environ.Env.read_env()
# Set the project base directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Read environment variables from a .env file

# False if not in os.environ because of casting above
DEBUG = True if env('DEBUG') == 'True' else False
# print(env('TEST_VARIABLE'))


SECRET_KEY = env('SECRET_KEY')


cloudinary.config( 
  cloud_name = 'dhljiows0', 
  api_key = '224778259285798',
  api_secret = 'cM7Jac4Coucj8yFj71_QgyUKUhU',
)
CLOUDINARY_CLOUD_NAME = env('CLOUDINARY_CLOUD_NAME')

# SECURITY SETTINGS
ALLOWED_HOSTS = ['dpj-porfolio.herokuapp.com']
                 
# APPLICATIONS
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'corsheaders',
    'rest_framework',
    'cloudinary_storage',
    'django.contrib.staticfiles',
    'cloudinary',
    'my_projects',
]

# MIDDLEWARE
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# TEMPLATE SETTINGS
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI SETTINGS
WSGI_APPLICATION = 'django_portfolio.wsgi.application'

# DATABASE SETTINGS
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': env('DATABASE_NAME'),
#         'USER': env('DATABASE_USER'),
#         'PASSWORD': env('DATABASE_PASS'),
#         'HOST': env('DATABASE_HOST'),
#         'PORT': env('DATABASE_PORT'),
#     }
# }
DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL')
    )
}

# PASSWORD VALIDATION SETTINGS
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# INTERNATIONALIZATION SETTINGS
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# STATIC FILES SETTINGS
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# DEFAULT PRIMARY KEY FIELD TYPE
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# REST FRAMEWORK SETTINGS
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'],
}

# CORS SETTINGS
CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'django_portfolio.urls'



