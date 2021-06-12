from odoo import api, fields, models


class HrAttendance(models.Model):
    _name = 'hr.attendance'
    _inherit = 'hr.attendance'

    lat_check_in = fields.Float(string="Latitude Check In")
    long_check_in = fields.Float(string="Longitude Check In")
    lat_check_out = fields.Float(string="Latitude Check Out")
    long_check_out = fields.Float(string="Longitude Check Out")
    maps_link_check_in = fields.Char(string="Maps Check In")
    maps_link_check_out = fields.Char(string="Maps Check Out")