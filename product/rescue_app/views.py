from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Rescue
from .serializer import Rescue_serializers
from rest_framework.parsers import MultiPartParser, FormParser


class pawRescue(APIView):
    
    def get(self,request):
        documents=Rescue.objects.all()
        serializer=Rescue_serializers(documents,many=True)
        return Response(serializer.data)

class UploadView(APIView):
    parser_classes = (MultiPartParser , FormParser)

    def get(self, request):
        return Response({"message": "GET request received"}, status=status.HTTP_200_OK)

    def post(self,request , *args , **kwargs):
        serializer1=Rescue_serializers(data=request.data)
        if serializer1.is_valid():
            serializer1.save()
            return Response(serializer1.data,status=status.HTTP_201_CREATED)

        return Response(serializer1.errors,status=status.HTTP_400_BAD_REQUEST)

        