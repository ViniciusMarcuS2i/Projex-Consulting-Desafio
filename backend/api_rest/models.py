from django.db import models

class Products(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default='')
    imgUrl = models.CharField(max_length=200, default='')
    description = models.CharField(max_length=300, default='')
    price = models.FloatField(default=0)

 
