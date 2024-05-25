from rest_framework.serializers import ModelSerializer
from leads.models import Lead

# Lead serializers
class LeadSerializers(ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'