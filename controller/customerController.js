import { customerService } from "../service/customerService"

export class customerController{
    async createCustomer(customerData){
        return new Promise(async(resolve, reject)=>{
            const payload = {
                account_id:request.body.ac_id,
                account_name:request.body.ac_name,
                under:request.body.under,
                customer_type:request.body.customer_type,
                area:request.body.area,
                opening_balance:request.body.opening_balance,
                account_type_dr_cr:request.body.account_type_dr_cr,
                mobile_number:request.body.mobile_number,
                cst_reg_no:request.body.cst_reg_no,
                out_of_state:request.body.out_of_state,
                tax_free_area:request.body.tax_free_area,
                sales_man:request.body.sales_man,
                bank_account_no:request.body.bank_account_no,
                bank_account_type:request.body.bank_account_type,
                remark:request.body.remark,
                credit_limit:request.body.credit_limit,
                credit_days:request.body.credit_days,
                contact_person:request.body.contact_person,
                customer_image:request.body.image
            }
            const result = await customerService.createCustomer(payload)
            return result
        })
    }
    async getCustomer(customerData){
        try{
            const result = await customerService()
        if (result.success){
                response.status(200).json(result);
            }else{
                response.status(400).json(result);
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ success: false, error: 500, message: "Internal server error" });
        }
    }
    async updateCustomer(customerData){

    }
    async deleteCustomer(customerData){
        
    }
}