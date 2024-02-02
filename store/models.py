from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default='')  # Provide a default value for email
    mobile_number = models.CharField(max_length=15, default='')  # Provide a default value for mobile_number
    required_size = models.CharField(max_length=50)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name
