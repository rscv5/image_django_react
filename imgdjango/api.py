from .models import ImageInfo
from rest_framework import viewsets
from .serializers import ImageInfoSerializer


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser

# class ImageInfoViewSet(viewsets.ModelViewSet):
#   queryset = ImageInfo.objects.all()
#   serializer_class = ImageInfoSerializer
class ImageInfoViewSet(APIView):
  parser_classes = (MultiPartParser, FormParser)

  def post(self,request,*args,**kwargs):
    # post_serializer = ImageInfoSerializer(data=request.data)
    post_serializer= request.data
    print('>>>>>>>>>',post_serializer)
    return Response({'info':'test'})