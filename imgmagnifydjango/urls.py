from .api import ImageInfoViewSet
from rest_framework import  routers

routers = routers.DefaultRouter()
routers.register('uploadimg',ImageInfoViewSet)

# 127.0.0.1:8000/uploadimg

urlpatterns = routers.urls
