function FormError ( {errors} ) {
    return (
            Object.values(errors).some(error => error) && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <span className="text-red-500 text-lg mr-2">⚠️</span>
                <h3 className="font-semibold text-red-800">
                  กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:
                </h3>
              </div>
              <ul className="space-y-1">
                {errors.name && (
                  <li className="text-red-700 text-sm flex items-center">
                    <span className="text-red-500 mr-2">❌</span>
                    {errors.name}
                  </li>
                )}
                {errors.email && (
                  <li className="text-red-700 text-sm flex items-center">
                    <span className="text-red-500 mr-2">❌</span>
                    {errors.email}
                  </li>
                )}
                {errors.selectedOption && (
                  <li className="text-red-700 text-sm flex items-center">
                    <span className="text-red-500 mr-2">❌</span>
                    {errors.selectedOption}
                  </li>
                )}
              </ul>
            </div>
          )
    )
    
}

export default FormError;