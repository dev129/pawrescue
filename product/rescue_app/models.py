from django.db import models

class Rescue(models.Model):
    centreName=models.CharField(max_length=100,null=False)
    registrationNumber=models.IntegerField(null=False)
    email=models.EmailField(null=False)
    phone=models.IntegerField(null=False)
    address_line1=models.CharField(max_length=100,null=False)
    city=models.CharField(max_length=30,null=False)
    state=models.CharField(max_length=30,null=False)
    pincode=models.IntegerField(null=False)
    landmark=models.CharField(max_length=50,null=False)
    
    facilities=models.JSONField(default=list)

    #form12A=models.FileField(upload_to='documents/')
    #form13A=models.FileField(upload_to='documents/')
    def __str__(self):
        return(f"Center name:{self.centreName}",
        f"Registration Number:{self.registrationNumber}",
        f"Email:{self.email}",
        f"Phone:{self.phone}",
        f"Address:{self.address_line1}",
        f"City:{self.city}",
        f"State:{self.state}",
        f"Pincode:{self.pincode}",
        f"Landmark:{self.landmark}",
        f"Facilities:{self.facilities}"

        )