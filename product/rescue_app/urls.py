from django.urls import path
from . import views

urlpatterns=[
    path('rescue_app/',views.pawRescue.as_view(),name='pawRescue')
]