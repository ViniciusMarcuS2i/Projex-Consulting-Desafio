from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Products
from .serializers import ProductsSerializer

import json

@api_view(['GET'])

def get_products(request):
    if request.method == 'GET':
        products = Products.objects.all()

        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)