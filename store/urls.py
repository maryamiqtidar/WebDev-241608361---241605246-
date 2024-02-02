from django.urls import path
from .views import index, order_list, order_detail

urlpatterns = [
    path('', index, name='index'),  # URL for the index view
    path('orders/', order_list, name='order-list'),  # URL for listing orders and creating a new order
    path('orders/<int:pk>/', order_detail, name='order-detail'),  # URL for updating and deleting a specific order
]