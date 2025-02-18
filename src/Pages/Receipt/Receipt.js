import {Document, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
  

const Receipt = () => {

    const styles = StyleSheet.create({
        page: {
          display: 'flex',
          textAlign: 'center',
          marginVertical: 50,
          fontSize: 16,
        },
        header: {
            paddingBottom: 40,
            paddingTop: 20,
        },
        title: {
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        section: {
          marginVertical: 10,
        },
        label: {
          fontSize: 18,
          fontWeight: 'heavy',
        },
        item: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        footer: {
          marginTop: 20,
          paddingTop: 10,
        },
      });
    

    // State
    const [transaction, setTransaction] = useState([]);

    // Params
    const {transaction_id} = useParams();

    // Fetch transaction from url and set transaction state
    const fetchReceipt = async (urlAddress, transactionState) => {
        try {
            const url = urlAddress;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            await response.json()
            .then(response => {
                transactionState(response)
            });
          } catch (error) {
            console.error(error.message);
          }
    }

     // fetch request
    useEffect(() => {
        fetchReceipt(`http://localhost:3001/receipt/${transaction_id}`, setTransaction);
        
    }, []);

    console.log(transaction,'ts')

    if (!transaction){
        return (
            <div>
            </div>
        )
    } else {

        const total = Number(transaction.amount).toFixed(2)

        return (
            <div className="flex flex-col items-end">
                <NavLink
                // Takes user back to account
                className='w-screen btn btn-ghost btn-wide'
                to={`/account/${transaction.account_number}`}>
                Back To Account
                </NavLink>
                <PDFViewer className="h-screen w-screen">
                    <Document>
                        <Page style={styles.page} size={{ width: 300, height: 540 }}>
                        <View>
                            <View style={styles.header}>
                                <Text style={styles.title}>Receipt</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.section}>Transaction # {transaction_id}</Text>
                                <Text style={styles.section}>{transaction.timestamp}</Text>
                                <Text style={styles.section}>Account # {transaction.account_number} </Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.section}>Details:</Text>
                                <Text>Unit {transaction.unit}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.label}>Total: ${total}</Text>
                            </View>
                        </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        )
    }
}

export default Receipt;
