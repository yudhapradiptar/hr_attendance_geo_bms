# -*- coding: utf-8 -*-
from odoo import http

# class CaHrAttendance(http.Controller):
#     @http.route('/ca_hr_attendance/ca_hr_attendance/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/ca_hr_attendance/ca_hr_attendance/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('ca_hr_attendance.listing', {
#             'root': '/ca_hr_attendance/ca_hr_attendance',
#             'objects': http.request.env['ca_hr_attendance.ca_hr_attendance'].search([]),
#         })

#     @http.route('/ca_hr_attendance/ca_hr_attendance/objects/<model("ca_hr_attendance.ca_hr_attendance"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('ca_hr_attendance.object', {
#             'object': obj
#         })