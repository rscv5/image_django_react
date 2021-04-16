from rest_framework import serializers
from .models import ImageInfo

class ImageInfoSerializer(serializers.ModelSerializer):

  class Meta:
    model = ImageInfo
    fields = ('file',)