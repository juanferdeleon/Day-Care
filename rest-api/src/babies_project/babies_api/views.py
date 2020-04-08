from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from . import models
from . import serializers
from . import permissions

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    '''Handles creating, reading and updating user profiles'''

    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [
        permissions.APIPermissionClassFactory(
            name='UserPermissions',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': False,
                    'update': True,
                    'partial_update': True,
                },
                'instance': {
                    'retrieve': False,
                    'destroy': True,
                    'update': False,
                }
            }
        )
    ]

    # #TODO las definiciones de Usuario
    # @action(detail=False, url_path='get-user', methods=['GET'])
    # def listar(self, request):
    #     '''Pruebas'''
    #     return Response({'message': 'Esta es una prueba del User Viewset'})

# class BabyViewSet(viewsets.ModelViewSet):
#     #TODO las definiciones de Bebe
#     def 

# class EventViewSet(viewsets.ModelViewSet):
#     #TODO las definiciones de Evento
#     def 