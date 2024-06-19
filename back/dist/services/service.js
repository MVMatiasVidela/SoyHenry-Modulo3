"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchServiceService = exports.putServiceService = exports.postServiceService = exports.getServiceByIdService = exports.getAllServicesService = void 0;
function getAllServicesService() {
    return "This is get all service";
}
exports.getAllServicesService = getAllServicesService;
function getServiceByIdService(id) {
    return "This is get by id service, id: ".concat(id);
}
exports.getServiceByIdService = getServiceByIdService;
function postServiceService(serviceData) {
    return "This is post service, data: ".concat(JSON.stringify(serviceData));
}
exports.postServiceService = postServiceService;
function putServiceService(id, serviceData) {
    return "This is put service, id: ".concat(id, ", data: ").concat(JSON.stringify(serviceData));
}
exports.putServiceService = putServiceService;
function patchServiceService(id, serviceData) {
    return "This is patch service, id: ".concat(id, ", data: ").concat(JSON.stringify(serviceData));
}
exports.patchServiceService = patchServiceService;
