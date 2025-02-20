from rest_framework import serializers
from .models import Rescue

class Rescue_serializers(serializers.ModelSerializer):
    class Meta: 
        model = Rescue
        fields = '__all__'  # Automatically includes form_12a and form_13a

    def validate_facilities(self, value):
        """Ensure facilities is a valid JSON list."""
        if isinstance(value, str):  # Convert string to list
            try:
                value = json.loads(value)
                if not isinstance(value, list):
                    raise serializers.ValidationError("Facilities must be a list.")
            except json.JSONDecodeError:
                raise serializers.ValidationError("Facilities must be a valid JSON array.")
        return value

    def validate_form_12a(self, value):
        """Optional: Add file validation (size, format)."""
        if value.size > 5 * 1024 * 1024:  # 5MB limit
            raise serializers.ValidationError("File size should not exceed 5MB.")
        if not value.name.endswith(('.pdf', '.doc', '.docx')):
            raise serializers.ValidationError("Only PDF and Word files are allowed.")
        return value

    def validate_form_13a(self, value):
        """Optional: Add file validation (size, format)."""
        return self.validate_form_12a(value)