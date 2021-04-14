from rest_framework import serializers
from .models import ImageInfo

class ImageInfoSerialize(serializers.ModelSerializer):

  class Meta:
    model = ImageInfo
    fields = ['image']