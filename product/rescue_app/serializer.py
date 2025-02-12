from rest_framework import serializers
from .models import Rescue

class Rescue_serializers(serializers.ModelSerializer):
    class Meta: 
        model =Rescue
        fields=['centerName', 'registrationNumber', 'email', 'phone', 'address_line1', 'city', 'state', 'pincode', 'landmark', 'facilities', ]