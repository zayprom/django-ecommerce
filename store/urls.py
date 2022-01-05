from django.urls import path
from . import views
from .views import RegisterPage, CustomLoginView, CustomerDetail, CustomerUpdate

urlpatterns = [
    path('', views.store, name = 'store'),
    path('cart/', views.cart, name = 'cart'),
    path('checkout/', views.checkout, name = 'checkout'),
    # path('product/<str:id>/', views.detail, name = 'detail'),
    path('update_item/', views.updateItem, name="update_item"),
    path('process_order/', views.processOrder, name="process_order"),

    path('register/', RegisterPage.as_view(), name = 'register'),
    path('login/', CustomLoginView.as_view(), name = 'login'),
    
    path('customer/<int:pk>/', CustomerDetail.as_view(), name = 'customer'),
    path('customer-update/<int:pk>/', CustomerUpdate.as_view(), name = 'customer-update'),
]