User.seed( :id,
    { id: 1 ,   name: '先生' ,
                email: 'nutfes-taro@email.com' ,
                password: 'gidaifes' ,
                password_confirmation: 'gidaifes' ,
                role_id: 1,
                grade_id: 1,
                department_id: 1,
                pc_name: "thinkpad X395",
                pc_cpu: "Ryzen 7 PRO 3700U",
                pc_memory: "16GB",
                pc_ssd: "256GB",
    },
    { id: 2 ,   name: '生徒' ,
                email: 'nutfes-jiro@email.com' ,
                password: 'gidaifes' ,
                password_confirmation: 'gidaifes' ,
                role_id: 2,
                grade_id: 1,
                department_id: 1,
                pc_name: "thinkpad X395",
                pc_cpu: "Ryzen 7 PRO 3700U",
                pc_memory: "16GB",
                pc_ssd: "256GB",
    },
 )
