from .models import ImageInfo
from rest_framework import viewsets
from .serializers import ImageInfoSerializer


class ImageInfoViewSet(viewsets.ModelViewSet):
  queryset = ImageInfo.objects.all()
  serializer_class = ImageInfoSerializer

# from rest_framework import viewsets
# from .serializers import ImageInfoSerializer
# from .models import ImageInfo
#
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.parsers import MultiPartParser,FormParser
# from rest_framework import status
# class ImageInfoViewSet(APIView):
#   parser_classes = (MultiPartParser, FormParser)
#
#   def post(self, request, *args, **kwargs):
#     print('request.data', request.data)
#     post_serializer = ImageInfoSerializer(data=request.data)
#     if post_serializer.is_valid():
#       post_serializer.save()
#       # data = request.data['image']
#       print('>>>>>>>>>', post_serializer.data)
#     return Response(post_serializer.data, status=status.HTTP_201_CREATED)