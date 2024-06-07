# Generated by Django 4.2.13 on 2024-06-07 00:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("leads", "0002_lead_message_alter_lead_email"),
    ]

    operations = [
        migrations.AddField(
            model_name="lead",
            name="owner",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="leads",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
