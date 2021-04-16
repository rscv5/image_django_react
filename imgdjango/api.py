from .models import ImageInfo
from rest_framework import viewsets
from .serializers import ImageInfoSerialize

class ImageInfoViewSet(viewsets.ModelViewSet):
  queryset = ImageInfo.objects.all()
  serializer_class = ImageInfoSerialize