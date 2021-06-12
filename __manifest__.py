# -*- coding: utf-8 -*-
{
    'name': "HR Attendance Geolocation",

    'summary': """
       Track employee attendance with their longitude, latitude, and also location in google maps""",

    'description': """
        Track employee attendance with their longitude, latitude, and also location in google maps
    """,

    'author': "beringinsedaya",
    'category': 'Human Resources',
    'version': '0.1',
    'depends': ['base','hr_attendance'],

    'data': [
        'views/hr_attendance_geo_bms_view.xml'
    ],
    'demo': [
        #'demo/demo.xml',
    ],
}