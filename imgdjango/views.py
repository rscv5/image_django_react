# from django.shortcuts import render
# from django.http import HttpResponse, JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.conf import settings
# import json
# import os
#
#
# @csrf_exempt
# def upload_success(request):
#   flag = True
#   if request.method == 'POST':
#     imgNameinfo = json.loads(request.body.decode('utf-8'))
#     imgname = imgNameinfo['fileName']
#     edfpath = os.path.join(settings.BASE_DIR, 'photos\\', imgname)  # 本地文件地址
#     # print('<<<<<<<<', edfpath)
#     if not os.path.exists(edfpath):
#       flag = False
#       # return JsonResponse(flag, safe=False)
#     # else:
#   return JsonResponse(flag, safe=False)

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework import status
from .serializers import ImageInfoSerializer
from .models import ImageInfo

# class ImageInfoViewSet(viewsets.ModelViewSet):
#   queryset = ImageInfo.objects.all()
#   serializer_class = ImageInfoSerializer
class ImageInfoViewSet(APIView):
  parser_classes = (MultiPartParser, FormParser)

  def post(self, request, *args, **kwargs):
    print('request.data', request.data)
    post_serializer = ImageInfoSerializer(data=request.data)
    if post_serializer.is_valid():
      post_serializer.save()
      # data = request.data['image']
      print('>>>>>>>>>', post_serializer.data)
    return Response(post_serializer.data, status=status.HTTP_201_CREATED)


