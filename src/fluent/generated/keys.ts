import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: '786d0c8dc18c43558082e1c62ce64f91'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '1090bc20911143eaadbe2c3b609c53a4'
                    }
                    'critical-fraud-reservation': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'dbbbdd5ab707499da5c375e4d297eddf'
                    }
                    'current-reservation-1': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '19572e8ee9154ea5a053919baa61cbb1'
                    }
                    'current-reservation-2': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'd91e5b50cb124230a120abe1603383fc'
                    }
                    'current-reservation-3': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '056736060f2f4af3ba83471a7d193757'
                    }
                    'current-reservation-4': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '71c893d3917042e988b4a001b37910d3'
                    }
                    fraud_alert_create: {
                        table: 'sys_security_acl'
                        id: 'fe2821aab69c4b0d8075d8033cb5d634'
                    }
                    fraud_alert_delete: {
                        table: 'sys_security_acl'
                        id: 'a773d6bd295e4211b2dd52b17458e65f'
                    }
                    fraud_alert_read: {
                        table: 'sys_security_acl'
                        id: '6e07dcadc2994a2382d1f0547b0c9be8'
                    }
                    fraud_alert_write: {
                        table: 'sys_security_acl'
                        id: 'bc68675a7eac4c5f9a269fb276d3d87f'
                    }
                    fraud_detection_br: {
                        table: 'sys_script'
                        id: 'e2b2ca468c2a40c2962fcfc3f84240a9'
                    }
                    'fraud-alert-1': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: 'd5ae952b7c4d4ab6a7a496edb984c9b4'
                    }
                    'fraud-alert-2': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: 'b2c297136fe546bab735c0e67825ab3a'
                    }
                    'fraud-alert-3': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: 'e5ffde4770b24cc7ab34d436ea646728'
                    }
                    'fraud-alert-4': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: 'cd31f4c7ed614efe884555f6d9734b64'
                    }
                    'fraud-alert-5': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: '3d1bff03ab78447e8bc9935dae62349a'
                    }
                    'fraud-alert-6': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: '1151b523911e46f198066bf37de604d7'
                    }
                    'fraud-alert-7': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: '58fe54f4d92740449bca8f02c6a93920'
                    }
                    'fraud-alert-8': {
                        table: 'x_snc_reservatio_2_fraud_alert'
                        id: '0b4f110f3a734edf8692c7f46665cde9'
                    }
                    'fraud-dashboard': {
                        table: 'sys_ui_page'
                        id: '44621d877e3346f48e75c32ed78322d1'
                    }
                    'high-fraud-reservation': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'a1f6e99e07c34e739106029ab9f3eaed'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '02a6b201416d4104a938a9abc67c5f15'
                    }
                    'reservation-1': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '3ccff605e4064969b4891ad68d764654'
                    }
                    'reservation-10': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'bfc84125f0954dfeb7f10a8ced9c0f26'
                    }
                    'reservation-11': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'b9d2fb1ebca346ddb8ef7a3139629291'
                    }
                    'reservation-12': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'a2f62ca0d276416d915882d920a523ec'
                    }
                    'reservation-2': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'd247a6c0879a4fe98d39925d289ddf86'
                    }
                    'reservation-3': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '6a5d16eb0b5c4d808eb4671d2fa076e4'
                    }
                    'reservation-4': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'bdd58d730f6d4e01bff3d952889a4928'
                    }
                    'reservation-5': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'bcebc3288c094e72b63cf06767930cb2'
                    }
                    'reservation-6': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'c606ada772284b919b19b07f930f7eb4'
                    }
                    'reservation-7': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '56b48545018d4d0b8bb3fa14eb54a305'
                    }
                    'reservation-8': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '471bd25b647342e6913606136b0e138c'
                    }
                    'reservation-9': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '1f4d076f59a445f5bcacbae1f5c5dfb6'
                    }
                    'src_server_fraud-detection_js': {
                        table: 'sys_module'
                        id: '7302fe6e3906435ca84b40254480ea14'
                    }
                    'suspicious-current-reservation': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: '1877030a72dd4f91b2eab7fefc25d0bb'
                    }
                    'suspicious-reservation-1': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'aa883f8454bd47a78c6462042692266b'
                    }
                    'trigger-test-reservation': {
                        table: 'x_snc_reservatio_2_reservation'
                        id: 'b223ed0bae6d4b6ea91fcf1f2fccdc02'
                    }
                    'x_snc_reservatio_2/main': {
                        table: 'sys_ux_lib_asset'
                        id: '9c4d219eba3b470d80e28177f0d1e513'
                    }
                    'x_snc_reservatio_2/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '7d2c0a7a5a0142809bad40adf750b702'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '022651af06e24512972157ca5b73c77e'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '028dc5f110904cb89d1ef9e4a1108c80'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0fdb92a2ecae471a9a73deff17c42aaf'
                        key: {
                            sys_security_acl: '6e07dcadc2994a2382d1f0547b0c9be8'
                            sys_user_role: {
                                id: '986348abbf3f49fc8472760d8e6e0489'
                                key: {
                                    name: 'x_snc_reservatio_2.fraud_monitoring_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '106f2576a5394f07a658383eb70982fc'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'daily_price'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14360c509fa3415099470cda3c6d9b0a'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'explanation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2850b204391346b5a767b846755f68b0'
                        key: {
                            sys_security_acl: 'fe2821aab69c4b0d8075d8033cb5d634'
                            sys_user_role: {
                                id: '986348abbf3f49fc8472760d8e6e0489'
                                key: {
                                    name: 'x_snc_reservatio_2.fraud_monitoring_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f6e5dde6a344e96b63619fff099f9ca'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'reservation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b88d0c687a14f70bd8d7dc3a1c9b1c7'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'customer_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ebe23dbaf1b40789f4ccda900540988'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44bb40e0eebc41ec8cd0f7c8af260572'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46f675890cea40d5b83f3dad597c8c97'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '518412b621f744939844f24603cc38fa'
                        key: {
                            sys_security_acl: 'bc68675a7eac4c5f9a269fb276d3d87f'
                            sys_user_role: {
                                id: '986348abbf3f49fc8472760d8e6e0489'
                                key: {
                                    name: 'x_snc_reservatio_2.fraud_monitoring_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52bc3657bf7f4b648846cbbfa7546224'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5721795d3b5343b2b013b883b8445a7c'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'booking_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5cf1cdc0d93b49cd98cede3df4ea759c'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'daily_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5edbb8f2b0f9461db7757d2b43e41bf3'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'reservation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66ba770ee07a45169f6e5135c0f17c42'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'recommended_action'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '675d969c2f614c92b8597c0e5a2b548f'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7055e5ac9e3146e3a2ea7b8d8779ec94'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'hotel_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72ced72e009c4840889331520d33181b'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73129f474ff64dd7856b667f8ca68eff'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'hotel_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '758843ac0b55441c9b0bc4e652b080ed'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '79bfff4d40d94776ab26012a49d09e6e'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            value: 'suite'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7fb14e786fe24d789c9b596e672cbb99'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '886b5f89199842dd839b97c2ed93f186'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            value: 'deluxe'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88e303ae1e4f42e48b4377e6694656aa'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'reservation_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b902490f4ff40e1900614feca538184'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'booking_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c865d796b154ad4aec6e3607f0b7e6e'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'customer_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9012ed8d69a54a3185f4dec006d18454'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '90996bf362da4003ac6e666f2e1e188f'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '921096069ac841b4a2c836fd0c1c3ee2'
                        key: {
                            sys_security_acl: 'a773d6bd295e4211b2dd52b17458e65f'
                            sys_user_role: {
                                id: '986348abbf3f49fc8472760d8e6e0489'
                                key: {
                                    name: 'x_snc_reservatio_2.fraud_monitoring_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '986348abbf3f49fc8472760d8e6e0489'
                        key: {
                            name: 'x_snc_reservatio_2.fraud_monitoring_agent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ecd2aebd6bd4775aefe86cdb8b8d43b'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'explanation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a136d05c76a948b4b1369e7319756b14'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7701d6b1b1946a8b1ea5e0252e388da'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                            value: 'investigating'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae485fdb8be14f6b85cfc5071f4c2582'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7891461e7e44ebda96d8d8800d095af'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'detected_price_anomaly'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bae0e361c8c34838b52ddd5845c381f6'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            value: 'executive'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bc9fe16644b443dc902953263cc959f7'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c110a3f436e74ca8b2524f68222b78cd'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'comparable_prices'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5396d3583014f048d5d9e1a1672634a'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9494cfa9e404c6b8f2420bd737eb567'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c998980f8fb44d219568aa5510edeb3c'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cbf8e19b2106411280007817a2f70283'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e21318233ba44b369e870dc80ea16849'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'alert_status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e272a977dae44b43802658b204925569'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'recommended_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea4d134a4c064451a5c6f30ead321aab'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'detected_price_anomaly'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebaeea9fd35a40689fd1ec4bb11b0fde'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'reservation_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f34cc2d6278645898082e36b62368e48'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                            value: 'presidential'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd03cc26be29452f9cf7b2dbb0d260e5'
                        key: {
                            name: 'x_snc_reservatio_2_reservation'
                            element: 'room_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe352c3d63c14b97b96ab2e896930686'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff301b4c8ccd4d94a594e63ca06f041b'
                        key: {
                            name: 'x_snc_reservatio_2_fraud_alert'
                            element: 'comparable_prices'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
