from django.db import models
from django.contrib.auth.models import User

class Flight(models.Model):
    flight_number = models.CharField(max_length=20, unique=True)
    airline = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    seats_available = models.PositiveIntegerField(default=50)  # Optional

    def __str__(self):
        return f"{self.flight_number} - {self.airline} ({self.origin} → {self.destination})"

from django.db import models
from django.contrib.auth.models import User

class Booking(models.Model):
    SEAT_CLASSES = [
        ('economy', 'Economy'),
        ('premium_economy', 'Premium Economy'),
        ('business', 'Business'),
        ('first_class', 'First Class'),
    ]

    BAGGAGE_CHOICES = [
        ('Cabin bag only', 'Cabin bag only'),
        ('Cabin + 15kg checked', 'Cabin + 15kg checked'),
        ('Cabin + 30kg checked', 'Cabin + 30kg checked'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_date = models.DateField()
    return_date = models.DateField(null=True, blank=True)
    travelers = models.PositiveIntegerField(default=1)
    airline = models.CharField(max_length=100, default='Any')
    seat_class = models.CharField(max_length=50, choices=SEAT_CLASSES, default='economy')
    baggage = models.CharField(max_length=50, choices=BAGGAGE_CHOICES, default='Cabin bag only')
    seat_preference = models.CharField(max_length=100, default='No preference')
    stop_preference = models.CharField(max_length=100, default='Any stops')

    # ✅ New field for Special Offers
    special_offer_code = models.CharField(max_length=50, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.origin} to {self.destination}"




class Package(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(null=True, blank=True)  # optional
    duration_days = models.PositiveIntegerField(default=1)  # optional


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"