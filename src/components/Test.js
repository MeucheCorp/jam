import React, { useState, useEffect } from "react"

const formID = "<YOUR_FORM_ID>"

function MyComponent() {
  useEffect(() => {
    const request = require("request")
    const XLSX = require("xlsx")

    const fileURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9jv7gj6o0dtL0QoeHxW7Ux2fk0Br6slV3mg-uzZY6hc17Zw-_cXRz0-pilCeZx_lDzaRAo0tNfueT/pub?output=xlsx"

    request.get(fileURL, { encoding: null }, function (err, res, data) {
      if (err || res.statusCode != 200) {
        console.log(res.statusCode)
        return
      }
      const buf = Buffer.from(data)
      const workbook = XLSX.read(buf)

      var sheet1 = workbook.Sheets[workbook.SheetNames[0]]
      var sheet2 = workbook.Sheets[workbook.SheetNames[1]]
      console.log(XLSX.utils.sheet_to_json(sheet1))
      console.log(XLSX.utils.sheet_to_json(sheet2))
    })
  }, []) // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {responseData ? (
        <div>{/* Render your component using responseData */}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default MyComponent
