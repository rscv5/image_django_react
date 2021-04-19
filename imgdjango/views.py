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



