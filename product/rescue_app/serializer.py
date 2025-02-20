from rest_framework import serializers
from .models import Rescue

class Rescue_serializers(serializers.ModelSerializer):
    class Meta:
        model = Rescue
        fields ='__all__'
    form_12a=serializers.FileField(required=True)
    form_13a=serializers.FileField(required=True)
