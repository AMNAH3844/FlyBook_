from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('flights/', FlightListView.as_view(), name='flight_list'),
    path('booking/', BookingCreateView.as_view(), name='create-booking'),
    path('my-bookings/', MyBookingsView.as_view(), name='my-bookings'),
    path('packages/', PackageListView.as_view(), name='package_list'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact'),
]
