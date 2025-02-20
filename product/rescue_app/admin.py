from django.contrib import admin
from .models import Rescue

@admin.register(Rescue)
class RescueAdmin(admin.ModelAdmin):
    list_display = ['center_name','registration_number','email','phone','address_line1','city','state','pincode','landmark','facilities','form_12a','form_13a']
    search_fields = ['center_name','registration_number','email','phone','address_line1','city','state','pincode','landmark','facilities','form_12a','form_13a']
    list_filter = ['center_name','registration_number','email','phone','address_line1','city','state','pincode','landmark','facilities','form_12a','form_13a']
    list_per_page = 10

# admin file me changes karna hai for proper visual and in table form