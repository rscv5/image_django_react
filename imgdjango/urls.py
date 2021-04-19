
from rest_framework import routers
from .api import ImageInfoViewSet

routers = routers.DefaultRouter()
routers.register(r'uploadimg', ImageInfoViewSet)

# 127.0.0.1:8000/uploadimg
#
urlpatterns = routers.urls

# from django.urls import path
# from . import views
# #
# urlpatterns =[
#   path('uploadimg/', views.ImageInfoViewSet.as_view(), name='img_posts_list'),
# ]