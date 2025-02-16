from rest_framework import serializers
from .models import Rescue

class Rescue_serializers(serializers.ModelSerializer):
    class Meta: 
        model =Rescue
        fields=['centreName',
                'registrationNumber', 
                'email', 
                'phone', 
                'address_line1', 
                'city', 
                'state', 
                'pincode', 
                'landmark', 
                'facilities', 
                'form12A' ,
                'form13A' 
            ]