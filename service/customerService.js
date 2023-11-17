export class customerService{
    async createCustomer(payload){
        try{
            const addCustomer = "insert into Customers (account_id, account_name, under, customer_type, area, opening_balance, account_type_dr_cr, mobile_number, cst_reg_no, out_of_state, tax_free_area, sales_man, bank_account_no, bank_account_type, remark, credit_limit, credit_days, contact_person, customer_image)value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            const result = await execute(addCustomer, [payload.account_id,payload.account_name, payload.under, payload.customer_image, payload.area, payload.opening_balance, payload.account_type_dr_cr, payload.mobile_number, payload.cst_reg_no, payload.out_of_state, payload.tax_free_area, payload.sales_man, payload. bank_account_no, payload.bank_account_type, payload.remark, payload.credit_limit, payload.credit_days, payload.contact_person, payload.customer_image])
            if(result){
                return resolve({"success":true, "data":insertResult, message:"data inserted successfully"})
            }else{
                return resolve({"success":false,  message:"something went wrong"})
            }
        }catch (error){
            return error
        }
    }
    async getCustomer(){
        try{
            return new Promise(async(resolve, reject)=>{
                const customer_list = "select * from Customers"
                const result = await execute(customer_list)
                if(result>0){
                    return resolve({"success":true, "data":result})
                }
            })
        }catch (error){
            return error
        }
    }
    async updateCustomer(customerData){


    }
    async deleteCustomer(customerData){
        
    }
}