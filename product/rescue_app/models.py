from django.db import models

class Rescue(models.Model):
    centreName=models.CharField(max_length=100,null=False)
    registrationNumber=models.IntegerField(null=False)
    email=models.EmailField(null=False)
    phone=models.CharField(max_length=15,null=False)
    address_line1=models.CharField(max_length=100,null=False)
    city=models.CharField(max_length=30,null=False)
    state=models.CharField(max_length=30,null=False)
    pincode=models.CharField(max_length=15,null=False)
    landmark=models.CharField(max_length=50,null=False)
    
    facilities=models.JSONField(default=list)

    form12A=models.FileField(upload_to='documents/' , null=True , blank=True)
    form13A=models.FileField(upload_to='documents/' , null=True , blank=True)
    def __str__(self):
        return(
            f"Center name:{self.centreName}\n"
            f"Registration Number:{self.registrationNumber}\n"
            f"Email:{self.email}\n"
            f"Phone:{self.phone}\n"
            f"Address:{self.address_line1}\n"
            f"City:{self.city}\n"
            f"State:{self.state}\n"
            f"Pincode:{self.pincode}\n"
            f"Landmark:{self.landmark}\n"
            f"Facilities:{self.facilities}"

        )