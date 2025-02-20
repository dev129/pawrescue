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
        return Response(serializer.data , status=status.HTTP_200_OK)


class UploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)        

    def post(self, request, *args, **kwargs):
        # Extract files from request.FILES and update request.data
        data = request.data.copy()  # Copy request data to modify it safely

        if request.FILES.get('form_12a'):
            data['form_12a'] = request.FILES.get('form_12a')
        if request.FILES.get('form_13a'):
            data['form_13a'] = request.FILES.get('form_13a')

        print("Request Data:", data)
        print("Request FILES:", request.FILES)

        # Validate & Save Data using Serializer
        serializer = Rescue_serializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("Serializer Errors:", serializer.errors)
        return Response({"message": "Failed to upload", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        documents=Rescue.objects.all()
        serializer=Rescue_serializers(documents,many=True)
        return Response(serializer.data , status=status.HTTP_200_OK)

    

