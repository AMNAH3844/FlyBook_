from django.contrib import admin
from .models import Flight, Booking, Package, ContactMessage

@admin.register(Flight)
class FlightAdmin(admin.ModelAdmin):
    list_display = ('flight_number', 'airline', 'origin', 'destination', 'departure_time', 'arrival_time', 'price', 'seats_available')
    search_fields = ('flight_number', 'airline', 'origin', 'destination')
    list_filter = ('airline', 'origin', 'destination')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'origin', 'destination', 'departure_date', 'travelers', 'seat_class')
    list_filter = ('airline', 'seat_class', 'stop_preference')
    search_fields = ('origin', 'destination', 'user__username')
    
@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'duration_days')
    search_fields = ('title',)
    list_filter = ('duration_days',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('created_at',)